const onChangeHandler = (
  e: any,
  handleChange: any,
  currentValue: string,
  maxLength: number,
  isFormikChanger: boolean
) => {
  if (
    !e.nativeEvent.data ||
    e.nativeEvent.data === "" ||
    currentValue.length < maxLength
  ) {
    if (handleChange) {
      isFormikChanger ? handleChange(e) : handleChange(e.target.value);
    } else {
      return true;
    }
  } else {
    return false;
  }
};
const onChangeHandler_AnySpace = (
  e: any,
  handleChange: any,
  currentValue: string,
  maxLength: number,
  isFormikChanger: boolean
) => {
  if (
    !e.nativeEvent.data ||
    e.nativeEvent.data === "" ||
    (e.nativeEvent.data !== " " && currentValue.length < maxLength)
  ) {
    if (handleChange) {
      isFormikChanger ? handleChange(e) : handleChange(e.target.value);
    } else {
      return true;
    }
  } else {
    return false;
  }
};
const onChangeHandler_MultiSpace = (
  e: any,
  handleChange: any,
  currentValue: string,
  maxLength: number,
  isFormikChanger: boolean
) => {
  if (!e.nativeEvent.data || e.nativeEvent.data === "") {
    if (handleChange) {
      isFormikChanger ? handleChange(e) : handleChange(e.target.value);
    } else {
      return true;
    }
  } else if (
    (!currentValue && e.nativeEvent.data === " ") ||
    (currentValue &&
      currentValue.slice(-1) === " " &&
      e.nativeEvent.data === " ")
  ) {
    return false;
  } else if (currentValue.length < maxLength) {
    if (handleChange) {
      isFormikChanger ? handleChange(e) : handleChange(e.target.value);
    } else {
      return true;
    }
  } else {
    return false;
  }
};
const onChangeHandler_Digits = (
  e: any,
  handleChange: any,
  currentValue: string,
  maxLength: number,
  isFormikChanger: boolean
) => {
  if (
    !e.nativeEvent.data ||
    e.nativeEvent.data === "" ||
    (new RegExp("^[0-9]+$").test(e.nativeEvent.data) &&
      currentValue.length < maxLength)
  ) {
    if (handleChange) {
      isFormikChanger ? handleChange(e) : handleChange(e.target.value);
    } else {
      return true;
    }
  } else {
    return false;
  }
};
const onChangeHandler_Decimal = (
  e: any,
  handleChange: any,
  currentValue: string,
  maxLength: number,
  isFormikChanger: boolean
) => {
  if (!e.nativeEvent.data || e.nativeEvent.data === "") {
    if (handleChange) {
      isFormikChanger ? handleChange(e) : handleChange(e.target.value);
    } else {
      return true;
    }
  } else if (e.nativeEvent.data === ".") {
    if (!currentValue) {
      return false;
    } else if (!currentValue.includes(".") && currentValue.length < maxLength) {
      if (handleChange) {
        isFormikChanger ? handleChange(e) : handleChange(e.target.value);
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else if (
    new RegExp("^[0-9]+$").test(e.nativeEvent.data) &&
    currentValue.length < maxLength
  ) {
    if (handleChange) {
      isFormikChanger ? handleChange(e) : handleChange(e.target.value);
    } else {
      return true;
    }
  } else {
    return false;
  }
};
const onChangeHandler_ValidName = (
  e: any,
  handleChange: any,
  currentValue: string,
  maxLength: number,
  isFormikChanger: boolean
) => {
  if (!e.nativeEvent.data || e.nativeEvent.data === "") {
    if (handleChange) {
      isFormikChanger ? handleChange(e) : handleChange(e.target.value);
    } else {
      return true;
    }
  } else if (e.nativeEvent.data === " ") {
    if (!currentValue || currentValue.slice(-1) === " ") {
      return false;
    } else {
      if (handleChange) {
        isFormikChanger ? handleChange(e) : handleChange(e.target.value);
      } else {
        return true;
      }
    }
  } else if (
    /^[a-zA-Z]*$/.test(e.nativeEvent.data) &&
    currentValue.length < maxLength
  ) {
    if (handleChange) {
      isFormikChanger ? handleChange(e) : handleChange(e.target.value);
    } else {
      return true;
    }
  } else {
    return false;
  }
};
export {
  onChangeHandler,
  onChangeHandler_AnySpace,
  onChangeHandler_MultiSpace,
  onChangeHandler_Digits,
  onChangeHandler_Decimal,
  onChangeHandler_ValidName,
};
