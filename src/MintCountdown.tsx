import { Paper } from '@material-ui/core';
import Countdown from 'react-countdown';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      padding: theme.spacing(0),
      '& > *': {
        margin: theme.spacing(0.5),
        marginRight: 0,
        width: theme.spacing(6),
        height: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#9C2522',
        color: 'white',
        borderRadius: 4,
        fontSize: 12.5,
      },
    },
    done: {
      display: 'flex',
      margin: theme.spacing(1),
      marginRight: 0,
      padding: theme.spacing(1),
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#9C2522',
      color: 'white',
      borderRadius: 5,
      fontWeight: 'bold',
      fontSize: 18,
    },
    item: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  }),
);

interface MintCountdownProps {
  date: Date | undefined;
  style?: React.CSSProperties;
  status?: string;
  onComplete?: () => void;
}

interface MintCountdownRender {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export const MintCountdown: React.FC<MintCountdownProps> = ({
  date,
  status,
  style,
  onComplete,
}) => {
  const classes = useStyles();
  const renderCountdown = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: MintCountdownRender) => {
    hours += days * 24;
    if (completed) {
      return status ? <span className={classes.done}>{status}</span> : null;
    } else {
      return (
        <div className={classes.root} style={style}>
          <Paper elevation={0}>
            <span className={classes.item}>
              {hours < 10 ? `0${hours}` : hours}
            </span>
            <span>hrs</span>
          </Paper>
          <Paper elevation={0}>
            <span className={classes.item}>
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
            <span>mins</span>
          </Paper>
          <Paper elevation={0}>
            <span className={classes.item}>
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
            <span>secs</span>
          </Paper>
        </div>
      );
    }
  };

  if (date) {
    return (
      <Countdown
        date={date}
        onComplete={onComplete}
        renderer={renderCountdown}
      />
    );
  } else {
    return null;
  }
};