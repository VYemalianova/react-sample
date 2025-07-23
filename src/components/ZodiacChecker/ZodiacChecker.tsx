import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

import { buildDateFromParts } from '@utils/dateUtils';
import { generateNumberArray } from '@utils/utils';
import { GlobalContext } from '@store/globalContext';
import { type ISign } from '@models/sign.model';
import { DateFormat } from '@models/date.types';

import styles from './ZodiacChecker.module.scss';

const LEAP_YEAR = 2024;

const ZodiacSignChecker = ({ onSignSelect }: { onSignSelect: (sign: ISign) => void }) => {
  const { signs } = useContext(GlobalContext);
  const [form, setForm] = useState({
    day: 1,
    month: 1,
  });
  const daysInSelectedMonth = dayjs({ year: LEAP_YEAR, month: form.month }).daysInMonth();
  const daysArray = generateNumberArray(daysInSelectedMonth);
  const monthArray = generateNumberArray(12);

  useEffect(() => {
    if (form.day > daysInSelectedMonth) {
      setForm({ ...form, day: 1 });
    }
  }, [form.month]);

  const handleFormChanges = (event: SelectChangeEvent<number>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleCheckSign = () => {
    const { day, month } = form;
    const inputDate = dayjs(
      buildDateFromParts({ month, day, year: LEAP_YEAR }, DateFormat.FullDate)
    );

    const selectedSign = signs.find((sign) => {
      const startDate = dayjs(sign.startDate);
      const endDate = dayjs(sign.endDate);

      if (endDate.isBefore(startDate)) {
        return (
          inputDate.isSameOrAfter(startDate) || inputDate.isSameOrBefore(endDate.add(1, 'year'))
        );
      }

      return inputDate.isSameOrAfter(startDate) && inputDate.isSameOrBefore(endDate);
    });

    onSignSelect(selectedSign!);
  };

  return (
    <div className={styles['zodiac-checker']}>
      <div>
        <h2>What Is My Zodiac Sign?</h2>
        <span>Enter you birthday to find out</span>
      </div>

      <div className={styles['inputs-wrapper']}>
        <FormControl sx={{ width: 88 }} size="small">
          <InputLabel>Day</InputLabel>
          <Select name="day" value={form.day} label="Day" onChange={handleFormChanges}>
            {daysArray.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: 256 }} size="small">
          <InputLabel>Month</InputLabel>
          <Select name="month" value={form.month} label="Month" onChange={handleFormChanges}>
            {monthArray.map((month) => (
              <MenuItem key={month} value={month - 1}>
                {dayjs()
                  .month(month - 1)
                  .format(DateFormat.MonthLong)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="light" onClick={handleCheckSign}>
          Find
        </Button>
      </div>
    </div>
  );
};

export default ZodiacSignChecker;
