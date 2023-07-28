import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api';

const initialState = {
    employee: null,
    employees: [],
    pager: null,
    isLoading: false,
    isSuccess: false,
    error: null
};

export const getEmployees = createAsyncThunk("employee/getEmployees", async ({ url }, { rejectWithValue }) => {
    try {
        const res = await api.get(url);

        return res.data;
    } catch (error) {
        rejectWithValue(error);
    }
});

export const getEmployee = createAsyncThunk("employee/getEmployee", async (id, { rejectWithValue }) => {
    try {
        const res = await api.get(`/api/employees/${id}`);

        return res.data;
    } catch (error) {
        rejectWithValue(error);
    }
});

export const store = createAsyncThunk("employee/store", async (data, { rejectWithValue }) => {
    try {
        const res = await api.post(`/api/employees`, data);

        return res.data;
    } catch (error) {
        rejectWithValue(error);
    }
});

export const update = createAsyncThunk("employee/update", async ({ id, data }, { rejectWithValue }) => {
    try {
        const res = await api.post(`/api/employees/${id}`, data);

        return res.data;
    } catch (error) {
        rejectWithValue(error);
    }
});

export const destroy = createAsyncThunk("employee/destroy", async (id, { rejectWithValue }) => {
    try {
        const res = await api.delete(`/api/employees/${id}`);

        return res.data;
    } catch (error) {
        rejectWithValue(error);
    }
});

export const upload = createAsyncThunk("employee/upload", async ({ id, data }, { dispatch, rejectWithValue }) => {
    try {
        const res = await api.post(`/api/employees/${id}/upload`, data);

        dispatch(updateAvatar(res.data?.avatar_url));

        return res.data;
    } catch (error) {
        rejectWithValue(error);
    }
});

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        updateAvatar: (state, { payload }) => {
            state.employee = { avatar_url: payload, ...state.employee };
        }
    },
    extraReducers: {
        [getEmployees.pending]: (state) => {
            state.employees = [];
            state.pager = null;
            state.isLoading = true;
            state.error = null;
        },
        [getEmployees.fulfilled]: (state, { payload }) => {
            const { data, ...pager } = payload;

            state.employees = data;
            state.pager = pager;
            state.isLoading = false;
        },
        [getEmployees.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        [getEmployee.pending]: (state) => {
            state.employee = null;
            state.isLoading = true;
            state.error = null;
        },
        [getEmployee.fulfilled]: (state, { payload }) => {
            state.employee = payload;
            state.isLoading = false;
        },
        [getEmployee.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        [store.pending]: (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.error = null;
        },
        [store.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.isLoading = false;
            state.isSuccess = true;
        },
        [store.rejected]: (state, { payload }) => {
            console.log(payload);
            state.isLoading = false;
            state.error = payload;
        },
        [update.pending]: (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.error = null;
        },
        [update.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.isLoading = false;
            state.isSuccess = true;
        },
        [update.rejected]: (state, { payload }) => {
            console.log(payload);
            state.isLoading = false;
            state.error = payload;
        },
        [destroy.pending]: (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.error = null;
        },
        [destroy.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.isLoading = false;
            state.isSuccess = true;
        },
        [destroy.rejected]: (state, { payload }) => {
            console.log(payload);
            state.isLoading = false;
            state.error = payload;
        },
        [upload.pending]: (state) => {
            state.isSuccess = false;
            state.error = null;
        },
        [upload.fulfilled]: (state, { payload }) => {
            state.isSuccess = true;
        },
        [upload.rejected]: (state, { payload }) => {
            state.error = payload;
        },
    }
});

export default employeeSlice.reducer;

export const { updateAvatar } = employeeSlice.actions;
