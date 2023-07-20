import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import ModalEmployeeList from '../../../components/Modals/EmployeeList';

const Committee = ({ defaultValue, onUpdate }) => {
    const [committees, setCommittees] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (defaultValue) setCommittees(defaultValue);
    }, [defaultValue]);

    const handleSelect = (employee) => {
        if (committees.find(committee => committee.employee_id === employee.id)) {
            window.alert('คุณเลือกรายการซ้ำ กรณาเลือกใหม่!!');
            return;
        }

        const newCommittees = [...committees, { employee_id : employee.id, employee }];
        setCommittees(newCommittees);
        onUpdate(newCommittees);
    };

    const handleRemove = (employeeId) => {
        const newCommittees = committees.filter(committee => committee.employee_id !== employeeId);

        setCommittees(newCommittees);
        onUpdate(newCommittees);
    };

    return (
        <div className="border w-full p-2 rounded-md">
            <ModalEmployeeList
                isShow={showModal}
                onHide={() => setShowModal(false)}
                onSelect={handleSelect}
            />

            <h3 className="font-bold text-lg mb-1">ผู้ตรวจรับ</h3>
            <ul className="flex flex-col text-sm ml-2">
                {committees.length > 0 ? committees.map((committee, index) => (
                    <li className="flex flex-row gap-2 w-full p-1" key={committee.employee_id}>
                        <div className="min-w-[50%] flex flex-row">
                            <span className="min-w-[45%]">
                                {index+1}. {committee.employee?.prefix.name}{committee.employee?.firstname} {committee.employee?.lastname}
                            </span>
                            <span>
                                <b>ตำแหน่ง</b> {committee.employee?.position?.name}{committee.employee?.level && committee.employee?.level?.name}
                            </span>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm px-1"
                            onClick={() => handleRemove(committee.employee_id)}
                        >
                            <FaMinus size={'12px'} />
                        </button>
                        {index === committees.length - 1 && (
                            <button type="button" className="btn btn-outline-primary btn-sm px-1" onClick={() => setShowModal(true)}>
                                <FaPlus size={'12px'} />
                            </button>
                        )}
                    </li>
                )) : (
                    <li className="flex flex-row w-full p-1">
                        <span className="min-w-[50%] text-red-500">ยังไม่มีรายการ</span>
                        <button type="button" className="btn btn-outline-primary btn-sm px-1" onClick={() => setShowModal(true)}>
                            <FaPlus size={'12px'} />
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Committee