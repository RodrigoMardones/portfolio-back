import Interactor from './execute.interactor'

export default class TechnologyInteractor implements Interactor{
    constructor(){

    }
    execute(entrada:any):any{
        return {
            status:true,
            code:200
        }
    }

}