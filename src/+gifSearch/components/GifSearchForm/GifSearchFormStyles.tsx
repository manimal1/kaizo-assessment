import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (isPhone: boolean) =>
  makeStyles((theme) => ({
    primary: {
      color: theme.palette.primary.main,
    },
    form: {
      maxWidth: isPhone ? '100%' : '50%',
    },
    input: {
      minWidth: '280px',
    },
    button: {
      marginLeft: isPhone ? '0' : '2rem',
      marginTop: isPhone ? '2rem' : '0',
      minWidth: '110px',
      height: isPhone ? '100%' : 'auto',
    },
  }));
