param(
  [string]$ZipPath = "$PSScriptRoot\spark-sanctuary.zip",
  [string]$Dest = "$PSScriptRoot\client\pages\our-product\spark"
)

if (-not (Test-Path $ZipPath)) {
  Write-Error "Zip file not found: $ZipPath"
  exit 1
}

Write-Host "Unpacking $ZipPath to $Dest (skipping existing files)"

Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [System.IO.Compression.ZipFile]::OpenRead($ZipPath)
try {
  foreach ($entry in $archive.Entries) {
    if ($entry.FullName.EndsWith('/')) { continue }
    $targetPath = Join-Path $Dest $entry.FullName
    $targetDir = Split-Path $targetPath -Parent
    if (-not (Test-Path $targetDir)) { New-Item -ItemType Directory -Path $targetDir | Out-Null }
    if (-not (Test-Path $targetPath)) {
      $stream = $entry.Open()
      $out = [System.IO.File]::Open($targetPath, [System.IO.FileMode]::CreateNew)
      try { $stream.CopyTo($out) } finally { $out.Close(); $stream.Close() }
      Write-Host "Extracted: $targetPath"
    } else {
      Write-Host "Skipped existing: $targetPath"
    }
  }
} finally {
  $archive.Dispose()
}

Write-Host "Done."
