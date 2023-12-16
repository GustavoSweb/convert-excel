class Processor{
    static Process(data){
        data = data.split("\r\n")
        data.map((element, i) =>  data.splice(i, 1, element.split(';')));
        return data
    }
}
module.exports = Processor