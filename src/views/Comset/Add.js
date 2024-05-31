import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import ComsetForm from './Form'

const AddComset = () => {
    return (
        <div className="content-wrapper">
            {/* breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">หน้าหลัก</Breadcrumb.Item>
                <Breadcrumb.Item active>ข้อมูลพื้ฐาน</Breadcrumb.Item>
                <Breadcrumb.Item href="/comset">ชุดคอมพิวเตอร์</Breadcrumb.Item>
                <Breadcrumb.Item active>เพิ่มชุดคอมพิวเตอร์</Breadcrumb.Item>
            </Breadcrumb>
        
            <div className="content">
                <h2 className="text-xl">เพิ่มชุดคอมพิวเตอร์</h2>

                <div className="my-2 border p-4 rounded-md">
                    <ComsetForm />
                </div>
            </div>
        </div>
    )
}

    export default AddComset
