import clsx from "clsx";
import React, { PureComponent } from "react";
import DatePicker from '@mui/lab/DatePicker';
import { createStyles } from "@material-ui/styles";
import { IconButton, withStyles } from "@material-ui/core";

class CustomElements extends PureComponent {
  state = {
    selectedDate: new Date()
  };

  handleWeekChange = date => {
    this.setState({ selectedDate: date.startOf("isoWeek") });
  };

  formatWeekSelectLabel = (date, invalidLabel) => {
    let dateClone = date;

    return dateClone && dateClone.isValid()
      ? `Week of ${dateClone.startOf("isoWeek").format("MMM DD")}`
      : invalidLabel;
  };

  renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
    const { classes } = this.props;

    let dateClone = date.clone();
    let selectedDateClone = selectedDate.clone();

    const start = selectedDateClone.startOf("week").toDate();
    const end = selectedDateClone.endOf("week").toDate();

    const dayIsBetween = dateClone.isBetween(start, end, null, []);
    const isFirstDay = dateClone.isSame(start, "day");
    const isLastDay = dateClone.isSame(end, "day");

    const wrapperClassName = clsx({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay
    });

    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween
    });

    return (
      <div>
        <div className={wrapperClassName}>
          <IconButton className={dayClassName}>
            <span>{dateClone.format("DD")}</span>
          </IconButton>
        </div>
      </div>
    );
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <DatePicker
        label="Week picker"
        value={selectedDate}
        onChange={this.handleWeekChange}
        renderDay={this.renderWrappedWeekDay}
        labelFunc={this.formatWeekSelectLabel}
      />
    );
  }
}

const styles = createStyles(theme => ({
  dayWrapper: {
    position: "relative"
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: "0 2px",
    color: "inherit"
  },
  customDayHighlight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "2px",
    right: "2px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%"
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled
  },
  highlightNonCurrentMonthDay: {
    color: "#676767"
  },
  highlight: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  endHighlight: {
    extend: "highlight",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%"
  },
  firstHighlight: {
    extend: "highlight",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%"
  }
}));

export default withStyles(styles)(CustomElements);
