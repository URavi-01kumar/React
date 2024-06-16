import { Client, ID, Databases, Storage,Query } from "appwrite";
import conf from "../conf/conf";

 export  class Service{

    Client =new Client();
    databasesatabases;
    bucket;


    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.Client);
        this.bucket=new Storage(this.Client);
    }


    async createPost ({title, slug, content, featuredImage, status, userId}){
        try{
        return await this.databases.createPost(
            
            conf.appwriteProjectId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
             )
        }
        catch (error){
            console.log("Appwrite service:: createPost:: error", error)

        }
    }
     
    async updatePost(slug,{ title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
        } catch (error) {
            console.log("Appwrite service:: updatePost :: error", error)
            
        }
    }

    async delectpost(slug){
        try {

            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
              
            )
            return true;
            
            
        } catch (error) {
            console.log("Appwrite Service:: DelectPost:: error", error);
            return false;
            
        }
    }

    async getPost(slug){
        try {
           return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite Service:: getPost:: error", error);
            return false;
            
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async uploadFile(file){  // yaha par file dene parega jan ham file upload karenge to
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file


            )
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile ::error",error);
            return false;
            
        }


    }

    async delectFile(fileId){
       try {
        await this. bucket.deleteFile(
            conf.appwriteBucketId,
            fileId

        )
        return true // when file delect then return true
        
       } catch (error) {
        console.log("Appwrite service :: delectFile :: error",error);
        return false
        
       }
    }

    // now create service to file preview and it is very fast so no need to asyac 

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }





}
const service= new Service();

export default service