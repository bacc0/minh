import styles from './OpeningTimesTable.module.scss';


const weekDays = (day, times) => {
     return (
          <dir
               className={styles.day_container}
               style={{ color: times === 'Close' ? '#C0C0C0': null }}
          >
               <div style={{ position: 'relative', left: -40 }}>
                    {day}
               </div>
               <div>{times}</div>
          </dir>
     )
}


const OpeningTimesTable = () => {

     return (
          <div className={styles.container}>
               {weekDays('Tuesday', '12:00am - 10:00pm')}
               {weekDays('Wednesday', '12:00am - 10:00pm')}
               {weekDays('Thursday', '12:00am - 10:00pm')}
               {weekDays('Friday', '12:00am - 10:00pm')}
               {weekDays('Saturday', '12:00am - 10:00pm')}
               {weekDays('Sunday', '12:00am - 10:00pm')}
               {weekDays('Monday', 'Close')}

          </div>
     )
};

export default OpeningTimesTable;