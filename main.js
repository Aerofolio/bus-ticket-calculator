function initializeForm(){
    let startDate = new Date();
    document.getElementById('userStartDate').valueAsDate = startDate;

    let endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 2);
    endDate.setDate(0);
    document.getElementById('userEndDate').valueAsDate = endDate;
}

function addCalculateButtonFunction(){
    document.getElementById('calculate').onclick = () => {

    };
}

initializeForm();
addCalculateButtonFunction();