import {Control,fetch} from 'gfs-react-dm'
import TestModel from '../model/TestModel'

@Control(TestModel )
export default class TestControl{

    static queryBookTypes(){

        return (dispatch)=>{
            fetch('/test').then((data)=>{
                dispatch(this.testControlUpdate(data.data) )
            })
        }
    }

    static getBooks(index,bookList){
        //根据此类生成的update方法
        return this.testControlUpdate('books',bookList[index] )
    }
    static updateBook(index,value){

        return (dispatch)=>{
            //根据此类生成的update方法
            dispatch(this.testControlUpdate(`books.${index}`,value))
            //根据此类生成的update方法
            dispatch(this.testControlUpdate('updateIndex',-1) )
        }

    }
    static delBook(index){
        //根据此类生成的del方法
        return this.testControlDel(`books.${index}`)
    }
}