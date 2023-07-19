var mobilecollection = {
    Samsung: {
        SamsungA02s: {
            ModelName: "SamsungA02s",
            ram: "4gb",
            rom: "32gb",
            camera: "15px"
        }
        ,
        SamsungS8: {
            ModelName: "SamsungS8",
            ram: "6gb",
            rom: "64gb",
            camera: "12px"
        }
        ,
        SamsungA32: {
            ModelName: "SamsungA32",
            ram: "8gb",
            rom: "56gb",
            camera: "15px"
        }
        ,
        SamsungS7: {
            ModelName: "SamsungS7",
            ram: "8gb",
            rom: "64gb",
            camera: "20px"
        }
    }
    ,
    Xiaomi: {
        Xiaomi1: {
            ModelName: " Xiaomi1",
            ram: "2gb",
            rom: "32gb",
            camera: "12px"
        }
        ,
        Xiaomi2: {
            ModelName: " Xiaomi2",
            ram: "4gb",
            rom: "64gb",
            camera: "12px"
        }
        ,
        Xiaomi3: {
            ModelName: " Xiaomi3",
            ram: "8gb",
            rom: "56gb",
            camera: "13px"
        }
        ,
        Xiaomi4: {
            ModelName: " Xiaomi4",
            ram: "8gb",
            rom: "64gb",
            camera: "14px"
        }
    }
    ,
    Huawei: {
        Huawei1: {
            ModelName: "Huawei1",
            ram: "2gb",
            rom: "32gb",
            camera: "12px"
        }
        ,
        Huawei2: {
            ModelName: "Huawei2",
            ram: "4gb",
            rom: "64gb",
            camera: "12px"
        }
        ,
        Huawei3: {
            ModelName: "Huawei3",
            ram: "8gb",
            rom: "56gb",
            camera: "13px"
        }
        ,
        Huawei4: {
            ModelName: "Huawei4",
            ram: "8gb",
            rom: "64gb",
            camera: "14px"
        }
    }
    ,
    RealMe: {
        RealMe1: {
            ModelName: "RealMe1",
            ram: "2gb",
            rom: "32gb",
            camera: "12px"
        }
        ,
        RealMe2: {
            ModelName: "RealMe2",
            ram: "4gb",
            rom: "64gb",
            camera: "12px"
        }
        ,
        RealMe3: {
            ModelName: "RealMe3",
            ram: "8gb",
            rom: "56gb",
            camera: "13px"
        }
        ,
        RealMe4: {
            ModelName: "RealMe4",
            ram: "8gb",
            rom: "64gb",
            camera: "14px"
        }
    }
}

var mobile = document.getElementById("mobiles") // get id first droppdown
var comapany_name = Object.keys(mobilecollection); //get the comapny names

var brand_name
function brand() {
    for (var i = 0; i < comapany_name.length; i++) {
        brand_name = comapany_name[i] // all the brand name store one by one
        mobile.innerHTML += `<option value="${brand_name}" >${brand_name}</option>` // render option
        mobile.addEventListener("click", selectcompany) // call the function
    }
}
var model = document.getElementById("Model")

function selectcompany(event) {
    model.innerHTML=""
    for (var i = 0; i < comapany_name.length; i++) {
        var selectedBrand = event.target.value;
        if (selectedBrand == comapany_name[i]) {
            var selectmodel = Object.keys(mobilecollection[selectedBrand])
            for (var j = 0; j < selectmodel.length; j++) {      
                var showmodel = selectmodel[j]
                model.innerHTML += `<option value="${showmodel}" >${showmodel}</option>`
            }

        }

    }
}


brand()


