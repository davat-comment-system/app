import React, {ReactNode} from "react";
import {Input, Textarea, Button} from "@heroui/react";
import {Control, FieldValues, Path, useController} from "react-hook-form";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@heroui/shared-icons";


export type CustomInputProps<T extends FieldValues> = {
    name: Path<T> ;
    control: Control<T>;

    label?: string;
    isLtr?: boolean;
    placeholder?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    type?: string;

    size?: "lg" | "md" | "sm";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    variant?: "flat" | "bordered" | "faded" | "underlined";
    labelPlacement?: "inside" | "outside" | "outside-left";
    radius?: "none" | "sm" | "md" | "lg" | "full";

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    isClearable?: boolean;
    isRequired?: boolean;

    isMultiline?: boolean;
    rows?: number | [number, number];

    className?: string;
    classNames?: { [key: string]: string };

    isSecret?: boolean;

    startContent?: ReactNode;
    endContent?: ReactNode;
}


export const CustomInput = <T extends FieldValues,>(props: CustomInputProps<T>) => {
    const {
        name,
        control,

        label,
        placeholder,

        isDisabled,
        isReadOnly,

        type,
        size,
        color,
        variant,
        labelPlacement,
        radius,

        description,
        errorMessage,
        isInvalid,

        isClearable,
        isRequired,

        isMultiline,
        rows,

        className = "",
        classNames,

        startContent,
        endContent,

    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})



    const _props = {
        label: label,
        placeholder: placeholder,
        type: type,

        fullWidth: true,
        size: size || "md",

        color: color || "default",
        variant: variant || "flat",
        labelPlacement: labelPlacement || "inside",
        radius: radius || "md",

        isDisabled: isDisabled,
        isReadOnly: isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting,

        isClearable: isClearable,
        isRequired: isRequired,

        description: description,

        startContent: !!startContent && (
            <div className="h-full flex justify-center items-end text-small pe-2 font-bold text-primary select-none">
                {startContent}
            </div>
        ),
        endContent: !!endContent && (
            <div className="h-full flex justify-center items-end text-small ps-2 font-bold text-primary select-none">
                {endContent}
            </div>
        ),

        isInvalid: isInvalid || fieldState.invalid,
        errorMessage: errorMessage || fieldState.error?.message,

        value: field.value,
        onChange: field.onChange,
        onBlur: field.onBlur,
        name: field.name,
    }



    if (isMultiline) {
        return (
            <Textarea
                {..._props}

                ref={field.ref}
                minRows={!!rows ? typeof rows === "number" ? rows : rows[0] : undefined}
                maxRows={!!rows ? typeof rows === "number" ? rows : rows[1] : undefined}

                className={className}
                classNames={classNames}
            />
        )
    }

    return (
        <Input
            {..._props}
            ref={field.ref}
            className={className}
            classNames={classNames}
        />
    )
};
