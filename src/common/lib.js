const month_dict = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const handleDate = (date) => {
    const dateOnly = String(date).split('T')[0]
    
    const date_arr = dateOnly.split("-")

    var result = date_arr[2] + " " + month_dict[parseInt(date_arr[1]) - 1] + ", " + date_arr[0]

    return result
}

export const convert2arr = (num) => {
    var result = []
    for (var i=0; i<num; i++){
        result.push(i)
    }

    return result
}