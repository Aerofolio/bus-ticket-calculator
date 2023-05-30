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
        let startDate = removeTime(document.getElementById('userStartDate').valueAsDate),
            endDate = removeTime(document.getElementById('userEndDate').valueAsDate),
            controlDate = new Date(startDate),
            //daysBetween = daysBetweenTwoDates(endDate, startDate)
            daysOcurrences = [0, 0, 0, 0, 0, 0, 0];

        while(controlDate.getTime() != endDate.getTime()){
            daysOcurrences[controlDate.getDay()]++;
            controlDate.setDate(controlDate.getDate() + 1);
            if(!(controlDate.getTime() != endDate.getTime()))
            daysOcurrences[controlDate.getDay()]++;
        }

        let totalTickets = 0;
        for(let i = 0; i < daysOcurrences.length; i++){
            let dayId = '';

            switch(i){
                case 0:
                    dayId = 'sun';
                    break;
                case 1:
                    dayId = 'mon';
                    break;
                case 2:
                    dayId = 'tue';
                    break;
                case 3:
                    dayId = 'wed';
                    break;
                case 4:
                    dayId = 'thu';
                    break;
                case 5:
                    dayId = 'fri';
                    break;
                case 6:
                    dayId = 'sat';
                    break;
            }

            totalTickets += Number(document.getElementById(dayId).value) * daysOcurrences[i];
        }

        totalTickets += Number(document.getElementById('extras').value);

        let finalValue = totalTickets * Number(document.getElementById('ticketValue').value.replace(',', '.'));
        finalValue -= Number(document.getElementById('cardValue').value.replace(',', '.'));

        document.getElementById('finalValueFormated').innerHTML = finalValue.toString().replace('.', ',');
    };
}

function removeTime(date = new Date()) {
    return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );
}

// function daysBetweenTwoDates(dateA, dateB){
//     let difference = dateA.getTime() - dateB.getTime();
//     return Math.ceil(difference / (1000 * 3600 * 24));
// }

initializeForm();
addCalculateButtonFunction();