import React from 'react'
import { useDispatch } from 'react-redux';
import { FormGroup } from 'react-bootstrap';
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useGetInitialFormDataQuery } from '../../../services/employee/employeeApi'
import { store, update } from '../../../features/member/memberSlice'

const memberSchema = Yup.object().shape({
    division_id: Yup.string().required(),
    duty_id: Yup.string().required(),
});

const AddMember = ({ isShow, mode, onCancel, member, employeeId }) => {
    const dispatch = useDispatch();
    const { data: formData } = useGetInitialFormDataQuery();

    const handleSubmit = (values, props) => {
        if (member) {
            dispatch(update({ id: member.id, values }));
        } else {
            dispatch(store(values));
        }

        props.resetForm();
        onCancel();
    };

    return (
        <>
            {isShow && (
                <Formik
                    enableReinitialize
                    initialValues={{
                        division_id: member ? member.division_id : '',
                        employee_id: member ? member.employee_id : employeeId,
                        duty_id: member ? member.duty_id : '',
                    }}
                    onSubmit={handleSubmit}
                >
                    {(formik) => {
                        return (
                            <Form>
                                <div className="flex flex-row gap-2 mb-2">
                                    <FormGroup className="w-[40%]">
                                        <select
                                            name="division_id"
                                            value={formik.values.division_id}
                                            onChange={formik.handleChange}
                                            className="form-control text-sm"
                                        >
                                            <option value="">-- เลือกหน่วยงาน --</option>
                                            {formData && formData.departments.map(dep => (
                                                <optgroup key={dep.id} label={dep.name}>
                                                    {dep.divisions.map(division => (
                                                        <option value={division.id} key={division.id}>
                                                            {division.name}
                                                        </option>
                                                    ))}
                                                </optgroup>
                                            ))}
                                        </select>
                                    </FormGroup>
                                    <FormGroup className="w-[40%]">
                                        <select
                                            name="duty_id"
                                            value={formik.values.duty_id}
                                            onChange={formik.handleChange}
                                            className="form-control text-sm"
                                        >
                                            <option value="">-- บทบาท/หน้าที่ --</option>
                                            <option value={1}>ผู้อำนวยการ</option>
                                            <option value={2}>หัวหน้ากลุ่มงาน</option>
                                            <option value={3}>หัวหน้างาน</option>
                                            <option value={4}>ผู้ปฏิบัติงาน</option>
                                        </select>
                                    </FormGroup>
                                    <button type="submit" className="btn btn-outline-primary text-sm">
                                        ตกลง
                                    </button>
                                    <button type="button" className="btn btn-outline-danger text-sm" onClick={onCancel}>
                                        ยกเลิก
                                    </button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            )}
        </>
    )
}

export default AddMember