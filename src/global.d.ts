interface Window {
    bridge: {
        initialize: () => Promise<void>;
        platform: {
            sendMessage: (message: string) => void;
        };
    };
}