import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  CardActions: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}));
