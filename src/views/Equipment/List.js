import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { getEquipments } from '../../features/equipment/equipmentSlice';

const EquipmentList = () => {
    const dispatch = useDispatch();
    const { equipments, pager, loading, success } = useSelector(state => state.equipment)

    useEffect(() => {
        dispatch(getEquipments());
    }, []);

    console.log(equipments);

    return (
        <div className="content-wrapper">
            {/* breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">หน้าหลัก</Breadcrumb.Item>
                <Breadcrumb.Item href="/">ข้อมูลพื้ฐาน</Breadcrumb.Item>
                <Breadcrumb.Item active>อุปกรณ์</Breadcrumb.Item>
            </Breadcrumb>
        
            <div className="content">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl">อุปกรณ์</h2>
                    <Link to="add" className="btn btn-primary">เพิ่มอุปกรณ์ใหม่</Link>
                </div>

                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center w-[5%]">#</th>
                                <th>รายละเอียด</th>
                                <th className="text-center w-[10%]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && (
                                <tr>
                                    <td colSpan={3} className="text-center">
                                        <Spinner animation="border" role="status" size="sm" style={{ marginRight: '2px' }}>
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </td>
                                </tr>
                            )}
                            {equipments && equipments.map((eq, index) => (
                                <tr key={eq.id}>
                                    <td>{index+pager.from}</td>
                                    <td>{eq.description}</td>
                                    <td className="text-center">
                                        <Link to={`/equipments/${eq.id}/edit`} className="btn btn-sm btn-warning mr-1">
                                            <FaPencilAlt />
                                        </Link>
                                        <button className="btn btn-sm btn-danger">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {!loading && equipments.length <= 0 && (
                                <tr>
                                    <td colSpan={3} className="text-center">
                                        -- ไม่มีข้อมูล --
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EquipmentList
