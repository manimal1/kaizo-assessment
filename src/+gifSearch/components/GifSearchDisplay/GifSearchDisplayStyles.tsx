import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  grid: {
    flexGrow: 1,
  },
  card: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'relative',
    maxWidth: '100%',
  },
});
