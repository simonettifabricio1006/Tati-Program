# Levanta un servidor local para la web del plan de entrenamiento.
# Doble clic (o "Ejecutar con PowerShell") para iniciar.
# Dejá esta ventana abierta mientras uses la web.

$puerto = 8080
Set-Location $PSScriptRoot

$ip = (Get-NetIPAddress -AddressFamily IPv4 -PrefixOrigin Dhcp,Manual -ErrorAction SilentlyContinue |
  Where-Object { $_.IPAddress -notlike "169.254.*" } |
  Select-Object -First 1 -ExpandProperty IPAddress)

Write-Host ""
Write-Host "Iniciando la web del plan de entrenamiento..." -ForegroundColor Cyan
Write-Host ""
Write-Host "  En esta PC:      http://localhost:$puerto" -ForegroundColor Green
if ($ip) {
  Write-Host "  Desde el celular: http://$ip`:$puerto" -ForegroundColor Green
  Write-Host "  (el celular debe estar conectado al mismo WiFi que esta PC)"
} else {
  Write-Host "  No se detecto una IP de red local. Conectate al WiFi e intenta de nuevo." -ForegroundColor Yellow
}
Write-Host ""
Write-Host "Para cerrar el servidor, cerra esta ventana o presiona Ctrl+C." -ForegroundColor DarkGray
Write-Host ""

python -m http.server $puerto
