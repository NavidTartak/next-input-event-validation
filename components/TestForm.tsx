"use client";
import {
  onChangeHandler,
  onChangeHandler_AnySpace,
  onChangeHandler_Decimal,
  onChangeHandler_Digits,
  onChangeHandler_MultiSpace,
  onChangeHandler_ValidName,
} from "@/utils/OnInputChangeHelper";
import { useFormik } from "formik";
import React, { useState } from "react";

const TestForm = () => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    username: "",
    age: "",
    salary: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      username: "",
      age: "",
      salary: "",
    },
    validate: (values) => {
      return {};
    },
    onSubmit: (values) => {
      console.log(values);
      alert("submitted by formik form");
    },
  });
  return (
    <div className="w-full flex flex-wrap justify-between md:justify-center items-center gap-2 px-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("submitted by state form");
        }}
        className="w-full sm:w-[calc(50%-8px)] md:w-[430px] flex flex-col gap-y-1 border border-stone-300 bg-stone-200 shadow-xl rounded-xl py-2 px-3"
      >
        <label className="font-bold text-[17px] border-b border-b-stone-300 pb-1">
          Form with State
        </label>
        <label className="text-[13px] text-stone-800">Name</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          value={data.name}
          onChange={(e) =>
            onChangeHandler_ValidName(
              e,
              (value: any) => {
                setData({
                  ...data,
                  name: value,
                });
              },
              data.name,
              15,
              false
            )
          }
        />
        <label className="text-[13px] text-stone-800">LastName</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          value={data.lastname}
          onChange={(e) =>
            onChangeHandler_ValidName(
              e,
              (value: any) => {
                setData({
                  ...data,
                  lastname: value,
                });
              },
              data.lastname,
              15,
              false
            )
          }
        />
        <label className="text-[13px] text-stone-800">UserName</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          value={data.username}
          onChange={(e) =>
            onChangeHandler_AnySpace(
              e,
              (value: any) => {
                setData({
                  ...data,
                  username: value,
                });
              },
              data.username,
              10,
              false
            )
          }
        />
        <label className="text-[13px] text-stone-800">Age</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          value={data.age}
          onChange={(e) =>
            onChangeHandler_Digits(
              e,
              (value: any) => {
                setData({
                  ...data,
                  age: value,
                });
              },
              data.age,
              2,
              false
            )
          }
        />
        <label className="text-[13px] text-stone-800">Salary</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          value={data.salary}
          onChange={(e) =>
            onChangeHandler_Decimal(
              e,
              (value: any) => {
                setData({
                  ...data,
                  salary: value,
                });
              },
              data.salary,
              5,
              false
            )
          }
        />
        <button
          type="submit"
          className="w-full mt-3 h-[34px] rounded-md outline-none shadow-md bg-blue-700 text-slate-100 flex justify-center items-center text-[14px]"
        >
          Submit
        </button>
      </form>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full sm:w-[calc(50%-8px)] md:w-[430px] flex flex-col gap-y-1 border border-stone-300 bg-stone-200 shadow-xl rounded-xl py-2 px-3"
      >
        <label className="font-bold text-[17px] border-b border-b-stone-300 pb-1">
          Form with Formik
        </label>
        <label className="text-[13px] text-stone-800">Name</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          value={formik.values.name}
          name="name"
          onChange={(e) =>
            onChangeHandler_ValidName(
              e,
              formik.handleChange,
              formik.values.name,
              15,
              true
            )
          }
        />
        <label className="text-[13px] text-stone-800">LastName</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          value={formik.values.lastname}
          name="lastname"
          onChange={(e) =>
            onChangeHandler_ValidName(
              e,
              formik.handleChange,
              formik.values.lastname,
              15,
              true
            )
          }
        />
        <label className="text-[13px] text-stone-800">UserName</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          name="username"
          value={formik.values.username}
          onChange={(e) =>
            onChangeHandler_AnySpace(
              e,
              formik.handleChange,
              formik.values.username,
              10,
              true
            )
          }
        />
        <label className="text-[13px] text-stone-800">Age</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          name="age"
          value={formik.values.age}
          onChange={(e) =>
            onChangeHandler_Digits(
              e,
              formik.handleChange,
              formik.values.age,
              2,
              true
            )
          }
        />
        <label className="text-[13px] text-stone-800">Salary</label>
        <input
          type="text"
          className="w-full border border-stone-400 bg-slate-100 h-[34px] rounded-md outline-none px-2 text-[14px]"
          name="salary"
          value={formik.values.salary}
          onChange={(e) =>
            onChangeHandler_Decimal(
              e,
              formik.handleChange,
              formik.values.salary,
              5,
              true
            )
          }
        />
        <button
          type="submit"
          className="w-full mt-3 h-[34px] rounded-md outline-none shadow-md bg-blue-700 text-slate-100 flex justify-center items-center text-[14px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestForm;
