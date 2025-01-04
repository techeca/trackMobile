import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { motion } from 'motion/react'
import { AppProvider } from "@context/AppContext";

export default function AppLayout({ children }) {
    const location = useLocation()

    const animatedRoutes = ["/app/settings"]; //, "/app/newSubscription", "/app/newCategory"
    const isAnimatedRoute = animatedRoutes.includes(location.pathname);

    return (
        <div className="h-screen">
            <AppProvider>
                <div className="h-[90%]">
                    <motion.div
                        key={location.pathname}
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 flex justify-center opacity-0 items-center w-full"
                    >
                        <Outlet />
                    </motion.div>
                </div>
                {(location.pathname !== '/app/settings' && location.pathname !== '/app/newSubscription' && location.pathname !== '/app/newCategory' && !location.pathname.startsWith('/app/subscription/')) &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="h-[10%]">
                        <Menu active={location.pathname} />
                    </motion.div>
                }
            </AppProvider>
        </div>
    )
}