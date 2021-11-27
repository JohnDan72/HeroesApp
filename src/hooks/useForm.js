import { useState } from 'react';



export const useForm = (initialState = {}) => {

    const [formValue, setFormValue] = useState({
        ...initialState,
        loading: false,
        error: {
            status: false,
            error_msg: ''
        }
    });

    const handleInputChange = ({ name, value }) => {
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const resetForm = () => {
        setFormValue({
            ...initialState,
            loading: false,
            error: {
                status: false,
                error_msg: ''
            }
        });
    }

    const setFormError = (status, error_msg = '') => {
        setFormValue({
            ...formValue,
            error: {
                status,
                error_msg
            }
        });
    }

    const setLoading = (loading) => {
        setFormValue({
            ...formValue,
            loading
        })
    }

    return {
        formValue,
        setFormValue,
        handleInputChange,
        resetForm,
        setFormError,
        setLoading
    };
}


