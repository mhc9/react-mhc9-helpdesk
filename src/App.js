import { Route, Routes } from 'react-router-dom';
import DefaultLayout from "./components/DefaultLayout"
import Home from './views/Home';
import TaskList from './views/Task/List';
import AddTask from './views/Task/Add';
import EditTask from './views/Task/Edit';
import TaskDetail from './views/Task/Detail';
import Advice from './views/Advice';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import GuardRoute from './components/GuardRoute';
import AddAsset from './views/Asset/Add';
import AssetList from './views/Asset/List';
import AssetDetail from './views/Asset/Detail';
import EditAsset from './views/Asset/Edit';
import AssetType from './views/AssetType';
import AssetCategory from './views/AssetCategory';
import ComsetList from './views/Comset/List';
import AddComset from './views/Comset/Add';
import EmployeeList from './views/Employee/List';
import AddEmployee from './views/Employee/Add';
import EditEmployee from './views/Employee/Edit';
import EmployeeDetail from './views/Employee/Detail';
import Department from './views/Department';
import Division from './views/Division';
import Room from './views/Room';
import RequisitionList from './views/Requisition/List';
import RequisitionDetail from './views/Requisition/Detail';
import AddRequisition from './views/Requisition/Add';
import EditRequisition from './views/Requisition/Edit';
import OrderList from './views/Order/List';
import AddOrder from './views/Order/Add';
import OrderDetail from './views/Order/Detail';
import InspectionList from './views/Inspection/List';
import AddInspection from './views/Inspection/Add';
import InspectionDetail from './views/Inspection/Detail';
import ItemList from './views/Item/List';
import AddItem from './views/Item/Add';
import EditItem from './views/Item/Edit';
import ItemDetail from './views/Item/Detail';
import SupplierList from './views/supplier/List';
import AddSupplier from './views/supplier/Add';
import Unit from './views/Unit'
import StiReportViewer from './components/ReportViewer/StiReportViewer';
import Requisition from './components/Preview/Requisition';
import RequisitionReport from './components/Preview/RequisitionReport';
import RequisitionCommittee from './components/Preview/RequisitionCommittee';
import Inspection from './components/Preview/Inspection';
import RepairationList from './views/Repairation/List';
import RepairationDetail from './views/Repairation/Detail';
import LoanList from './views/Loan/List';

function App() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route index element={<GuardRoute><Home /></GuardRoute>} />

                {/* ============================= IT Helpdesk ============================= */}
                {/* Tasks */}
                <Route path="task" element={<GuardRoute><TaskList /></GuardRoute>} />
                <Route path="task/add" element={<GuardRoute><AddTask /></GuardRoute>} />
                <Route path="task/:id/edit" element={<GuardRoute><EditTask /></GuardRoute>} />
                <Route path="task/:id/detail" element={<GuardRoute><TaskDetail /></GuardRoute>} />

                {/* Repairation */}
                <Route path="repairation" element={<GuardRoute><RepairationList /></GuardRoute>} />
                <Route path="repairation/:id/detail" element={<GuardRoute><RepairationDetail /></GuardRoute>} />

                {/* ============================= Procurement ============================= */}
                {/* Requisitions */}
                <Route path="requisition" element={<GuardRoute><RequisitionList /></GuardRoute>} />
                <Route path="requisition/add" element={<GuardRoute><AddRequisition /></GuardRoute>} />
                <Route path="requisition/:id/edit" element={<GuardRoute><EditRequisition /></GuardRoute>} />
                <Route path="requisition/:id/detail" element={<GuardRoute><RequisitionDetail /></GuardRoute>} />

                {/* Orders */}
                <Route path="order" element={<GuardRoute><OrderList /></GuardRoute>} />
                <Route path="order/add" element={<GuardRoute><AddOrder /></GuardRoute>} />
                <Route path="order/:id/detail" element={<GuardRoute><OrderDetail /></GuardRoute>} />

                {/* Inspections */}
                <Route path="inspection" element={<GuardRoute><InspectionList /></GuardRoute>} />
                <Route path="inspection/add" element={<GuardRoute><AddInspection /></GuardRoute>} />
                <Route path="inspection/:id/detail" element={<GuardRoute><InspectionDetail /></GuardRoute>} />

                {/* ============================= Advance Payment ============================= */}
                <Route path="loan" element={<GuardRoute><LoanList /></GuardRoute>} />

                {/* ============================= System Data ============================= */}
                {/* Items */}
                <Route path="item" element={<GuardRoute><ItemList /></GuardRoute>} />
                <Route path="item/add" element={<GuardRoute><AddItem /></GuardRoute>} />
                <Route path="item/:id/edit" element={<GuardRoute><EditItem /></GuardRoute>} />
                <Route path="item/:id/detail" element={<GuardRoute><ItemDetail /></GuardRoute>} />

                {/* Suppliers */}
                <Route path="supplier" element={<GuardRoute><SupplierList /></GuardRoute>} />
                <Route path="supplier/add" element={<GuardRoute><AddSupplier /></GuardRoute>} />

                {/* Units */}
                <Route path="unit" element={<GuardRoute><Unit /></GuardRoute>} />

                {/* Equipments */}
                <Route path="equipment" element={<GuardRoute><ComsetList /></GuardRoute>} />
                <Route path="equipment/add" element={<GuardRoute><AddComset /></GuardRoute>} />

                {/* Assets */}
                <Route path="asset" element={<GuardRoute><AssetList /></GuardRoute>} />
                <Route path="asset/add" element={<GuardRoute><AddAsset /></GuardRoute>} />
                <Route path="asset/:id/edit" element={<GuardRoute><EditAsset /></GuardRoute>} />
                <Route path="asset/:id/detail" element={<GuardRoute><AssetDetail /></GuardRoute>} />
                <Route path="asset-type" element={<GuardRoute><AssetType /></GuardRoute>} />
                <Route path="asset-category" element={<GuardRoute><AssetCategory /></GuardRoute>} />

                {/* Employees */}
                <Route path="employee" element={<GuardRoute><EmployeeList /></GuardRoute>} />
                <Route path="employee/add" element={<GuardRoute><AddEmployee /></GuardRoute>} />
                <Route path="employee/:id/edit" element={<GuardRoute><EditEmployee /></GuardRoute>} />
                <Route path="employee/:id/detail" element={<GuardRoute><EmployeeDetail /></GuardRoute>} />

                {/*  */}
                <Route path="department" element={<GuardRoute><Department /></GuardRoute>} />
                <Route path="division" element={<GuardRoute><Division /></GuardRoute>} />
                <Route path="room" element={<GuardRoute><Room /></GuardRoute>} />

                {/* ============================= Help ============================= */}
                {/*  */}
                <Route path="advice" element={<GuardRoute><Advice /></GuardRoute>} />

                {/* ============================= Miscellaneous ============================= */}
                {/* Report */}
                <Route path="report-viewer" element={<GuardRoute><StiReportViewer /></GuardRoute>} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/preview/:id/requisition" element={<Requisition />} />
            <Route path="/preview/:id/requisition/report" element={<RequisitionReport />} />
            <Route path="/preview/:id/requisition/committee" element={<RequisitionCommittee />} />
            <Route path="/preview/:id/inspection" element={<Inspection />} />
        </Routes>
    );
}

export default App;
