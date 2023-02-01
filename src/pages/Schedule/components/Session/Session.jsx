import { Schedule } from "../Schedule/Schedule";
import { Container, Day, Schedules } from "./Styles";

export function Session({ weekday, day, schedules }) {
  return (
    <Container>
      <Day>
        {weekday} - {day}
      </Day>
      <Schedules>
        {schedules.map((schedule) => {
          const { id, name } = schedule;
          return (
            <Schedule
              key={id}
              id={id}
              time={name}
              weekday={weekday}
              day={day}
            />
          );
        })}
      </Schedules>
    </Container>
  );
}
