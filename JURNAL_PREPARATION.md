# 📚 Panduan Persiapan File untuk Jurnal

## ✅ File yang PERLU Dimasukkan ke Jurnal

### 1. Source Code (Wajib)
```
app/                    # Semua file di folder app
components/             # Semua file di folder components (kecuali test/debug)
lib/                    # Semua file di folder lib
hooks/                  # Semua file di folder hooks
types/                  # Semua file di folder types
public/                 # File static assets (gambar, dll)
```

### 2. File Konfigurasi (Wajib)
```
package.json            # Dependencies dan scripts
tsconfig.json           # TypeScript configuration
next.config.mjs         # Next.js configuration
postcss.config.mjs      # PostCSS configuration
components.json         # UI components configuration
```

### 3. File Dokumentasi (Opsional tapi Disarankan)
```
README.md               # Jika ada
CLEANUP_ANALYSIS.md     # Dokumentasi analisis cleanup
docs/                   # Folder dokumentasi (jika ada)
```

---

## ❌ File yang TIDAK Perlu Dimasukkan

### 1. Build Artifacts
```
.next/                  # Next.js build output
dist/                   # Distribution files
build/                  # Build files
node_modules/           # Dependencies (terlalu besar)
```

### 2. Environment & Secrets
```
.env                    # Environment variables
.env.local              # Local environment
.env.production         # Production environment
```

### 3. Version Control
```
.git/                   # Git repository
.gitignore              # Git ignore file
```

### 4. Lock Files (Opsional)
```
pnpm-lock.yaml          # Lock file (bisa dimasukkan untuk reproducibility)
package-lock.json       # Lock file
yarn.lock               # Lock file
```

### 5. File Test/Debug (Sudah Dihapus)
```
components/admin/test-notification.tsx      # ❌ Sudah dihapus
components/admin/debug-notifications.tsx    # ❌ Sudah dihapus
app/api/test/                              # ❌ Sudah dihapus
app/api/debug/                             # ❌ Sudah dihapus
```

---

## 📁 Struktur Folder yang Disarankan untuk Jurnal

```
KPPKL/
├── 📄 README.md                    # Dokumentasi project
├── 📄 package.json                 # Dependencies
├── 📄 tsconfig.json                # TypeScript config
├── 📄 next.config.mjs              # Next.js config
│
├── 📁 app/                          # Next.js App Router
│   ├── 📁 api/                     # API Routes
│   │   ├── 📁 admin/               # Admin API endpoints
│   │   ├── 📁 agent/               # Agent API endpoints
│   │   ├── 📁 customer/            # Customer API endpoints
│   │   └── ...
│   ├── 📁 dashboard/               # Dashboard pages
│   │   ├── 📁 admin/               # Admin dashboard
│   │   ├── 📁 agent/                # Agent dashboard
│   │   └── 📁 customer/             # Customer dashboard
│   ├── 📄 layout.tsx               # Root layout
│   ├── 📄 page.tsx                  # Home page
│   └── 📄 globals.css               # Global styles
│
├── 📁 components/                   # React Components
│   ├── 📁 admin/                    # Admin components
│   │   ├── agent-management.tsx
│   │   ├── property-management.tsx
│   │   ├── reservation-management.tsx
│   │   ├── reservation-report.tsx
│   │   └── ...
│   ├── 📁 agent/                    # Agent components
│   ├── 📁 customer/                 # Customer components
│   ├── 📁 ui/                       # UI components (shadcn/ui)
│   └── ...
│
├── 📁 lib/                          # Utility Libraries
│   ├── 📁 supabase/                 # Supabase clients
│   ├── currency.ts                  # Currency utilities
│   ├── mock-data.ts                 # TypeScript interfaces
│   └── utils.ts                     # General utilities
│
├── 📁 hooks/                        # Custom React Hooks
│   ├── use-notifications.ts
│   └── use-toast.ts
│
├── 📁 types/                        # TypeScript Types
│   └── database.types.ts
│
└── 📁 public/                       # Static Assets
    ├── diverse-property-showcase.png
    └── ...
```

---

## 🧹 Langkah-langkah Persiapan

### Step 1: Cleanup File Tidak Digunakan
Jalankan script cleanup:
```powershell
.\cleanup-unused-files.ps1
```

Atau manual:
1. Hapus `components/admin/test-notification.tsx`
2. Hapus `components/admin/debug-notifications.tsx`
3. Hapus `app/api/test/` dan `app/api/debug/`
4. Hapus `__dummy__.ipynb`
5. Hapus folder kosong (`lib/websocket/`, `app/notifications/`)

### Step 2: Optimasi Mock Data
Ganti `lib/mock-data.ts` dengan versi optimized (hanya interfaces):
- Gunakan `lib/mock-data.optimized.ts` sebagai referensi
- Hapus semua mock arrays (mockProperties, mockAgents, dll)
- Pertahankan hanya TypeScript interfaces

### Step 3: Verifikasi Build
```bash
pnpm build
```
Pastikan tidak ada error setelah cleanup.

### Step 4: Buat Archive untuk Jurnal
```powershell
# Buat folder untuk jurnal
mkdir KPPKL_Jurnal

# Copy file yang diperlukan (exclude node_modules, .next, dll)
# Gunakan tool seperti 7-Zip atau WinRAR untuk membuat archive
```

---

## 📊 Statistik Project (Setelah Cleanup)

- **Total File Source Code**: ~150+ file
- **Total Lines of Code**: ~15,000+ baris
- **File yang Dihapus**: 6-8 file
- **Code yang Dioptimasi**: ~200+ baris

---

## 📝 Catatan Penting

1. **Jangan masukkan node_modules/** - Terlalu besar dan tidak perlu
2. **Jangan masukkan .env files** - Berisi secrets
3. **Pertahankan struktur folder** - Penting untuk memahami arsitektur
4. **Include package.json** - Penting untuk melihat dependencies
5. **Include dokumentasi** - Membantu reviewer memahami project

---

## ✨ Tips untuk Jurnal

1. **Buat README.md** yang menjelaskan:
   - Overview project
   - Teknologi yang digunakan
   - Cara setup dan run
   - Struktur folder

2. **Tambahkan komentar** di code yang kompleks

3. **Gunakan format yang rapi** - Pastikan indentasi konsisten

4. **Include screenshots** - Jika ada, masukkan screenshot aplikasi

---

## 🎯 Checklist Final

- [ ] File test/debug sudah dihapus
- [ ] Mock data sudah dioptimasi
- [ ] Build berhasil tanpa error
- [ ] Struktur folder rapi
- [ ] Dokumentasi lengkap
- [ ] README.md dibuat (jika belum ada)
- [ ] Archive dibuat untuk jurnal


