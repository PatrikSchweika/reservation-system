import {Button, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup, Stack, TextField} from "@mui/material";
import moment from "moment";
import {useCreateReservation} from "./reservation-queries.ts";
import {Controller, useForm} from "react-hook-form";
import {useCallback, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {APP_ROUTES} from "../routing/routes.ts";
import {ReservationFormData, ReservationSchema} from "./reservation-schemas.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {DateTimePicker} from "@mui/x-date-pickers";

interface CreateReservationDialogProps {
    open: boolean
    onClose: () => void
    startDate: Date
    endDate: Date
}

export const CreateReservationDialog = ({ startDate, endDate, open, onClose }: CreateReservationDialogProps) => {
    const { createReservationAsync } = useCreateReservation()

    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ReservationFormData>({
        defaultValues: useMemo(() => ({
                from: startDate,
                to: endDate,
            }), [startDate, endDate]),
        resolver: yupResolver(ReservationSchema),
    })

    const navigate = useNavigate()

    const onSubmit = useCallback((data: ReservationFormData) => {
        const dto = {
            from: startDate.toISOString(),
            to: endDate.toISOString(),
            name: data.name,
            email: data.email,
            phone: data.phone
        }

        createReservationAsync(dto).then(() => navigate(APP_ROUTES.ThankYouRoute))
    }, [navigate, createReservationAsync, endDate, startDate])

    return <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create reservation</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
                <Stack spacing={4}>
                    <FormGroup>
                        {/*<DateTimePickerControl*/}
                        {/*    control={control}*/}
                        {/*    name="from"*/}
                        {/*    label="From"*/}
                        {/*/>*/}
                        <Controller
                            control={control}
                            name="from"
                            render={({ field, fieldState: { error } }) => (
                                <DateTimePicker
                                    label="From"
                                    value={moment(field.value)}
                                    inputRef={field.ref}
                                    onChange={(date) => field.onChange(date?.toDate())}
                                    onAccept={(date) => field.onChange(date?.toDate())}
                                    disableFuture
                                    slotProps={{
                                        textField: {
                                            variant: 'outlined',
                                            error: !!error,
                                            helperText: error?.message,
                                        },
                                    }}
                                />
                            )
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        {/*<DateTimePickerControl*/}
                        {/*    control={control}*/}
                        {/*    name="to"*/}
                        {/*    label="To"*/}
                        {/*/>*/}
                        <Controller
                            control={control}
                            name="to"
                            render={({ field, fieldState: { error } }) => (
                                <DateTimePicker
                                    label="To"
                                    value={moment(field.value)}
                                    inputRef={field.ref}
                                    onChange={(date) => field.onChange(date?.toDate())}
                                    slotProps={{
                                        textField: {
                                            variant: 'outlined',
                                            error: !!error,
                                            helperText: error?.message,
                                        },
                                    }}
                                />
                            )
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            label="Name"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            {...register('name')}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            label="Email"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            {...register('email')}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            label="Phone"
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            {...register('phone')}
                        />
                    </FormGroup>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color="success" type="submit">Create</Button>
                <Button color="error" onClick={() => onClose()}>Close</Button>
            </DialogActions>
        </form>
    </Dialog>
}
