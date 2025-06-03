import { useState, useCallback } from "react";

type NotificationType = "success" | "error" | "info" | "warning";

interface Notification {
  message: string;
  type: NotificationType;
  visible: boolean;
}

export const useNotification = () => {
  const [notification, setNotification] = useState<Notification>({
    message: "",
    type: "info",
    visible: false,
  });

  const showNotification = useCallback(
    (message: string, type: NotificationType = "info") => {
      setNotification({ message, type, visible: true });
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
      }, 3000);
    },
    []
  );

  return {
    notification,
    showNotification,
  };
};

export const Notification = () => {
  const { notification } = useNotification();

  if (!notification.visible) return null;

  const bgColor = {
    success: "#4caf50",
    error: "#f44336",
    info: "#2196f3",
    warning: "#ff9800",
  }[notification.type];

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "15px 25px",
        backgroundColor: bgColor,
        color: "white",
        borderRadius: "4px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
        animation: "fadeIn 0.3s, fadeOut 0.3s 2.7s",
      }}
    >
      {notification.message}
    </div>
  );
};
