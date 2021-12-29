const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: "this is some token",
        },
        actions: {
            logout: () => {
                setStore({ token: "" });
            },
        }
    };
};

export default getState;