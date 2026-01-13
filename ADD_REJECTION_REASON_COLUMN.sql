-- SQL Script untuk menambahkan kolom rejection_reason ke tabel reservations
-- Jalankan script ini di Supabase SQL Editor

-- Tambahkan kolom rejection_reason ke tabel reservations
ALTER TABLE reservations 
ADD COLUMN IF NOT EXISTS rejection_reason TEXT;

-- Verifikasi kolom telah ditambahkan
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'reservations' 
AND column_name = 'rejection_reason';

