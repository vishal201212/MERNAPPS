function errordata(error,data){
    const result = {
        status:''
    }
    if(error!=null){
        result['status']='error'
        result['error'] = error
            }
            else{
                result['status']='success'
                result['data'] = data
            }
            return result
}

module.exports = {
    errordata:errordata
}