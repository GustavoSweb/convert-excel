class Table{
    constructor(arr){
        this.header = arr[0]
        this.rows = arr.shift()
    }
    get RowCount(){
        return this.rows.length
    }
    get ColumCount(){
        return this.header.length
    }

}

module.exports = Table