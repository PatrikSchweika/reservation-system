import {DateTimePicker} from "@mui/x-date-pickers";
import {Control, Controller, FieldValues, Path} from "react-hook-form";
import moment from "moment";

// type DateTimePickerControlProps = DateTimePickerProps<moment.Moment> & ControllerProps

interface DateTimePickerControlProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    label: string
}

export const DateTimePickerControl = <T extends FieldValues>({ control, name, label }: DateTimePickerControlProps<T>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <DateTimePicker
                    label={label}
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
    )
}