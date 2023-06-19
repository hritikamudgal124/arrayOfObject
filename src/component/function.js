import moment from "moment";
import freshers from "./utils";

const sortingFun = (sortBy, sort, isDate, dateFormat) => {
  let data = [...freshers];
  const format = dateFormat || "";

  data.sort((a, b) => {
    if (sort === "asc") {
      if (isDate) {
        if (moment(a[sortBy], format) < moment(b[sortBy], format)) {
          return -1;
        } else if (moment(a[sortBy], format) > moment(b[sortBy], format)) {
          return 1;
        }
      }
    } else {
      if (sort((a, b) => a[sortBy]< b[sortBy])) {
        return -1;
      } else if (sort((a, b) => a[sortBy]>b[sortBy])) {
        return 1;
      }
    }
    console.log(data.sort);
    return 0;
  });

  return data;
};

export default sortingFun;
