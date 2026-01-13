# 📋 Rekomendasi File/Folder Utama untuk Jurnal

## 🎯 Strategi: Fokus pada File Inti yang Menunjukkan Arsitektur & Fitur Utama

Karena terlalu banyak jika semua dimasukkan, berikut rekomendasi file/folder **PRIORITAS TINGGI** yang representatif:

---

## ✅ WAJIB DIMASUKKAN (File Konfigurasi & Core)

### 1. **File Konfigurasi** (5 file)
```
✅ package.json              # Dependencies & scripts
✅ tsconfig.json             # TypeScript config
✅ next.config.mjs           # Next.js config
✅ postcss.config.mjs        # PostCSS config (opsional)
✅ components.json           # UI components config (opsional)
```

### 2. **Root Files** (3 file)
```
✅ app/layout.tsx            # Root layout
✅ app/page.tsx              # Home/Login page
✅ app/globals.css           # Global styles
```

---

## ✅ PRIORITAS TINGGI (Core Features)

### 3. **Dashboard Pages** (9 file - 1 per role per fitur utama)
```
✅ app/dashboard/admin/page.tsx
✅ app/dashboard/admin/properties/page.tsx
✅ app/dashboard/admin/agents/page.tsx
✅ app/dashboard/admin/reservations/page.tsx
✅ app/dashboard/admin/report/page.tsx          # Fitur report PDF

✅ app/dashboard/agent/page.tsx
✅ app/dashboard/agent/chat/page.tsx
✅ app/dashboard/agent/reservations/page.tsx

✅ app/dashboard/customer/page.tsx
✅ app/dashboard/customer/properties/page.tsx
✅ app/dashboard/customer/reservations/page.tsx
```

### 4. **Core Components - Admin** (5 file utama)
```
✅ components/admin/agent-management.tsx        # CRUD agen
✅ components/admin/property-management.tsx      # CRUD properti
✅ components/admin/reservation-management.tsx  # Manajemen reservasi
✅ components/admin/reservation-report.tsx      # Fitur report PDF ⭐
✅ components/dashboards/admin-dashboard.tsx    # Dashboard admin
```

### 5. **Core Components - Agent** (3 file utama)
```
✅ components/agent/chat-interface.tsx           # Chat system
✅ components/agent/agent-reservations.tsx      # Reservasi agen
✅ components/dashboards/agent-dashboard.tsx    # Dashboard agen
```

### 6. **Core Components - Customer** (3 file utama)
```
✅ components/customer/customer-reservations.tsx
✅ components/customer/property-detail-modal.tsx
✅ components/dashboards/customer-dashboard.tsx
```

### 7. **Layout & Auth** (4 file)
```
✅ components/layout/dashboard-layout.tsx        # Layout wrapper
✅ components/layout/sidebar.tsx                # Navigation
✅ components/auth/login-form.tsx                # Login
✅ components/auth/register-form.tsx             # Register
```

---

## ✅ PRIORITAS SEDANG (API Routes - Pilih yang Representatif)

### 8. **API Routes - Admin** (5 file representatif)
```
✅ app/api/admin/agents/route.ts                # CRUD agen
✅ app/api/admin/properties/route.ts            # CRUD properti
✅ app/api/admin/reservations/route.ts          # Manajemen reservasi
✅ app/api/admin/reservations/report/route.ts   # API report ⭐
✅ app/api/admin/metrics/route.ts               # Dashboard metrics
```

### 9. **API Routes - Agent** (3 file representatif)
```
✅ app/api/agent/reservations/route.ts
✅ app/api/agent/conversations/route.ts
✅ app/api/agent/messages/route.ts
```

### 10. **API Routes - Customer** (3 file representatif)
```
✅ app/api/customer/reservations/route.ts
✅ app/api/customer/conversations/route.ts
✅ app/api/customer/notifications/route.ts
```

### 11. **API Routes - Auth & Core** (2 file)
```
✅ app/api/auth/register/route.ts
✅ app/api/properties/list/route.ts
```

---

## ✅ PRIORITAS SEDANG (Libraries & Utilities)

### 12. **Lib Folder** (5 file)
```
✅ lib/supabase/browser-client.ts               # Supabase client
✅ lib/supabase/server-client.ts
✅ lib/supabase/service-client.ts
✅ lib/mock-data.ts                            # TypeScript interfaces
✅ lib/currency.ts                              # Utility functions
```

### 13. **Hooks** (2 file)
```
✅ hooks/use-notifications.ts
✅ hooks/use-toast.ts
```

### 14. **Types** (1 file)
```
✅ types/database.types.ts                     # Database types
```

---

## ⚠️ OPSIONAL (Bisa Disingkat atau Dihapus)

### 15. **UI Components** (Pilih 10-15 yang paling sering digunakan)
```
⚠️ components/ui/button.tsx                     # WAJIB
⚠️ components/ui/card.tsx                       # WAJIB
⚠️ components/ui/input.tsx                      # WAJIB
⚠️ components/ui/dialog.tsx                    # WAJIB
⚠️ components/ui/badge.tsx
⚠️ components/ui/select.tsx
⚠️ components/ui/table.tsx
⚠️ components/ui/toast.tsx
⚠️ components/ui/textarea.tsx
⚠️ components/ui/calendar.tsx
⚠️ components/ui/dropdown-menu.tsx
⚠️ components/ui/form.tsx
⚠️ components/ui/label.tsx
⚠️ components/ui/separator.tsx
⚠️ components/ui/tabs.tsx
```

**Catatan**: UI components lainnya bisa dihapus atau hanya disebutkan di dokumentasi.

### 16. **Shared Components** (Pilih yang penting)
```
⚠️ components/shared/activity-log.tsx
⚠️ components/shared/stats-card.tsx
⚠️ components/shared/loading-spinner.tsx
```

---

## ❌ TIDAK PERLU DIMASUKKAN

### File yang Bisa Dihapus dari Jurnal:
```
❌ components/ui/* (yang tidak digunakan)      # Hanya pilih yang penting
❌ app/api/admin/add-rejection-reason-column/  # Migration script
❌ app/api/admin/sync-auth-profiles/           # Utility script
❌ app/api/admin/fix-agent-profile/            # Utility script
❌ app/api/agents/validate/                    # Validation utility
❌ app/api/supabase/health/                    # Health check
❌ components/shared/* (yang jarang digunakan)
❌ public/ (gambar bisa dijelaskan di dokumentasi)
```

---

## 📊 RINGKASAN REKOMENDASI

### Total File yang Disarankan: **~60-70 file**

**Breakdown:**
- ✅ Konfigurasi: 5 file
- ✅ Root & Layout: 7 file
- ✅ Dashboard Pages: 11 file
- ✅ Core Components: 11 file
- ✅ API Routes: 13 file
- ✅ Libraries: 8 file
- ⚠️ UI Components: 15 file (pilih yang penting)
- ⚠️ Shared: 3 file

**Total: ~73 file** (masih lebih ringkas dari semua file)

---

## 🎯 STRUKTUR FOLDER YANG DISARANKAN

```
KPPKL_Jurnal/
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 next.config.mjs
│
├── 📁 app/
│   ├── 📄 layout.tsx
│   ├── 📄 page.tsx
│   ├── 📄 globals.css
│   │
│   ├── 📁 dashboard/
│   │   ├── 📁 admin/          # 5 file
│   │   ├── 📁 agent/          # 3 file
│   │   └── 📁 customer/      # 3 file
│   │
│   └── 📁 api/
│       ├── 📁 admin/         # 5 file utama
│       ├── 📁 agent/          # 3 file utama
│       ├── 📁 customer/      # 3 file utama
│       ├── 📁 auth/          # 1 file
│       └── 📁 properties/     # 1 file
│
├── 📁 components/
│   ├── 📁 admin/             # 5 file utama
│   ├── 📁 agent/              # 3 file utama
│   ├── 📁 customer/           # 3 file utama
│   ├── 📁 dashboards/         # 3 file
│   ├── 📁 layout/             # 2 file
│   ├── 📁 auth/               # 2 file
│   ├── 📁 ui/                 # 15 file (pilih yang penting)
│   └── 📁 shared/             # 3 file (pilih yang penting)
│
├── 📁 lib/
│   ├── 📁 supabase/           # 3 file
│   ├── 📄 mock-data.ts
│   └── 📄 currency.ts
│
├── 📁 hooks/                  # 2 file
├── 📁 types/                  # 1 file
│
└── 📄 README.md               # Dokumentasi (buat jika belum ada)
```

---

## 💡 TIPS TAMBAHAN

### 1. **Buat README.md yang Komprehensif**
Jelaskan:
- Overview aplikasi
- Fitur utama
- Teknologi yang digunakan
- Struktur folder
- Cara setup

### 2. **Tambahkan Komentar di Code**
Tambahkan komentar di file-file penting untuk menjelaskan:
- Alur bisnis
- Logika kompleks
- Integrasi dengan database

### 3. **Sertakan Screenshot**
Jika memungkinkan, sertakan screenshot:
- Dashboard admin
- Dashboard agent
- Dashboard customer
- Fitur report PDF

### 4. **Dokumentasi API**
Buat dokumentasi singkat untuk API endpoints utama

---

## ✅ CHECKLIST FINAL

- [ ] File konfigurasi (5 file)
- [ ] Root files (3 file)
- [ ] Dashboard pages (11 file)
- [ ] Core components (11 file)
- [ ] API routes representatif (13 file)
- [ ] Libraries (8 file)
- [ ] UI components penting (15 file)
- [ ] README.md dibuat
- [ ] Komentar ditambahkan di code penting
- [ ] Build masih berfungsi setelah seleksi

---

## 🎯 KESIMPULAN

**Dengan rekomendasi ini, Anda akan memiliki:**
- ✅ **~60-70 file** (vs 150+ file jika semua)
- ✅ **Fokus pada fitur utama** dan arsitektur
- ✅ **Tetap representatif** untuk menunjukkan kemampuan
- ✅ **Lebih mudah direview** oleh dosen/pembaca jurnal
- ✅ **Tetap menunjukkan** kompleksitas dan kualitas code

**File yang dihapus adalah:**
- File utility/migration yang tidak core
- UI components yang jarang digunakan
- File helper yang tidak kritis

