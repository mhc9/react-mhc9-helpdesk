import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import LoanForm from './Form'

const AddLoan = () => {
    return (
        <div className="content-wrapper">
            <Breadcrumb>
                <Breadcrumb.Item href="/">หน้าหลัก</Breadcrumb.Item>
                <Breadcrumb.Item active>ยืมเงินราชการ</Breadcrumb.Item>
                <Breadcrumb.Item href="/loan">รายการคำขอ</Breadcrumb.Item>
                <Breadcrumb.Item active>เพิ่มคำขอ</Breadcrumb.Item>
            </Breadcrumb>

            <div className="content">

                <LoanForm />

            </div>
        </div>
    )
}

export default AddLoan