/* eslint-disable quotes */
/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */

import * as Yup from 'yup';

class Validator {
    /*   Method check password validation
         minimum 8 length
         1 Special charater
        1 Numeric value */

    passwordvalidation = () => {
        return  Yup.object({
            password: Yup.string().required('Password is required').matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
            ).min(8).max(10).label('password').trim(),
            passwordConfirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match').matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                ).min(8).max(10).label('password').trim(),
        });

    };
}

export default Validator;
