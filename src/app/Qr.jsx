import { useState } from "react";
import Layout from "../components/Layout";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { GridLoader } from "react-spinners";

export default function Qr() {
    const [prevResult, setPrevResult] = useState(null);

    const handleSuccess = (result) => {
        if (prevResult === null || prevResult !== result) {
            setPrevResult(result);
            alert(prevResult);
            // mutate 전송 react-query
        }
    };
    return (
        <Layout isHeader isFooter>
            <div className="w-full h-full flex items-center">
                {/* 임시적으로 isLading(mutate에서 제공됨) 대신 true로 함 */}
                {false ? (
                    <div className="w-full flex justify-center">
                        <GridLoader />
                    </div>
                ) : (
                    <QrScanner
                        onDecode={handleSuccess}
                        onError={(error) => console.log(error?.message)}
                        //  후면 카메라
                        constraints={{ facingMode: "environment" }}
                        scanDelay={500}
                    />
                )}
            </div>
        </Layout>
    );
}
