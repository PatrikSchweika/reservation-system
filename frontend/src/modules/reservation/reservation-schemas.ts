import * as yup from "yup"
import moment from "moment";

export interface ReservationFormData {
    from: Date
    to: Date
    name: string
    email: string
    phone: string
}

yup.addMethod(yup.object, 'moment', function method(message) {
    return this.test('moment', message, function validate(value){
        if (!value) {
            return true
        }

        return moment.isMoment(value)
    })
})

export const ReservationSchema: yup.ObjectSchema<ReservationFormData> = yup.object().shape({
    from: yup
        .date()
        .max(yup.ref('to'), 'Start date should be less than end date')
        .required(),
    to: yup.date()
        .min(yup.ref('from'), 'End date should be greater than start date')
        .required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required()
})
