"use client"

import React, {useEffect, useMemo} from "react";
import {
    addToast,
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    SharedSelection
} from "@heroui/react";
import {UserRoundCog} from "lucide-react";
import useSWR from "swr";
import {User} from "@/interfaces/User.interface";
import {setSelectedUser} from "@/store/userSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/useStore";


export function UserSwitch() {

    const {data, error, isLoading} = useSWR<User[]>('/user')
    const dispatch = useAppDispatch();
    const selectedUser = useAppSelector((state) => state.user.selectedUser);
    const handleSelectUser = (keys: SharedSelection) => {
        const selectedKey = Array.from(keys)[0];
        const selected = (data || []).find((us) => us._id === selectedKey);
        if (selected) {
            dispatch(setSelectedUser(selected));
        }
    }

    useEffect(() => {
        if (selectedUser) {
            addToast({
                title: "Logged in successfully",
                description: `as ${selectedUser.fullName}`,
                color: "success",
                variant: "solid",
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            })
        }
    }, [selectedUser]);

    const items = useMemo(() => {
        return (data || []).map((item) => {
            return {key: item._id, label: item.fullName};
        })
    }, [data])


    return (
        <div className="flex flex-col gap-1 fixed bottom-3 right-3">
            {!!error && (
                <span className="font-light text-danger">
                    {error?.message}
                </span>
            )}
            <Dropdown backdrop="blur">
                <DropdownTrigger>
                    <Button
                        radius="full"
                        size="lg"
                        color={selectedUser ? "success" : "danger"}
                        variant="shadow"
                        className="px-3"
                        isIconOnly={isLoading || !selectedUser || !!error}
                        isLoading={isLoading}
                        endContent={(isLoading || !selectedUser || !!error) ? undefined : (
                            <Avatar
                                color="default"
                                radius="full"
                                size="sm"
                                showFallback
                                name={selectedUser?.fullName}
                            />
                        )}
                    >
                        {selectedUser ? selectedUser?.fullName : <UserRoundCog/>}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    items={items}
                    selectionMode="single"
                    selectedKeys={selectedUser?._id}
                    onSelectionChange={handleSelectUser}
                >
                    {(item) => (
                        <DropdownItem
                            key={item.key}
                        >
                            {item.label}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>

        </div>
    );
}
