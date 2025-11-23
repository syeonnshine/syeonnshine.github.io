import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(),
        tailwindcss(),],
    // 필요한 경우 여기에 추가 설정 (예: 별칭, 포트)을 추가할 수 있습니다.
    server: {
        // 개발 서버 포트 설정 (선택 사항)
        port: 3000,
    },
});