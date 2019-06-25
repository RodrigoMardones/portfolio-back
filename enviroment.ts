export default class Enviroment{
    DBC:string = "mongodb://rodrigowasp:asdfasdf123@cluster0-shard-00-00-y37sm.mongodb.net:27017,cluster0-shard-00-01-y37sm.mongodb.net:27017,cluster0-shard-00-02-y37sm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    constructor(){}
    getURL():string{
        return this.DBC;
    }
}