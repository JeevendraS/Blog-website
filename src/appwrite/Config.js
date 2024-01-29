import {Client , ID, Databases, Query, Storage} from "appwrite";
import configVariable from "../configVariable/configVariable";

export class Service{
    client = new Client()
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(configVariable.appwriteUrl)
            .setProject(configVariable.appwriteProjectId)
        this.databases = new Databases(this.client) 
        this.bucket = new Storage(this.client)   
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try { console.log(typeof status)
            return await this.databases.createDocument(configVariable.appwriteDatabaseId,configVariable.appwriteCollectionId,slug,{
                title,
                content, 
                featuredImage,
                status,
                userId
            })
        } catch (error) {
            console.log("Appwrite service Config :: createPost :: error",error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                configVariable.appwriteDatabaseId,
                configVariable.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                })
        } catch (error) {
            console.log("Appwrite service Config :: updatePost :: error",error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                configVariable.appwriteDatabaseId,
                configVariable.appwriteCollectionId,
                slug)
            return true    
        } catch (error) {
            console.log("Appwrite service Config :: deletePost :: error",error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                configVariable.appwriteDatabaseId,
                configVariable.appwriteCollectionId,
                slug)
        } catch (error) {
            console.log(console.log("Appwrite service Config :: getPost :: error",error));
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","true")]){
        try {
            return await this.databases.getDocument(
                configVariable.appwriteDatabaseId,
                configVariable.appwriteCollectionId,
                queries)
        } catch (error) {
            console.log(console.log("Appwrite service Config :: getPosts :: error",error));
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                configVariable.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service Config :: uploadFile :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                configVariable.appwriteBucketId,
                fileId
                )
            return true    
        } catch (error) {
            console.log("Appwrite service Config :: createPost :: error",error);
            return false
        }
    }

    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(   //this line can get error
                configVariable.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service Config :: createPost :: error",error);
            return false
        }
    }
}


const service = new Service()

export default service