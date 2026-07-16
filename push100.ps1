# 100 Git Push Script - resuming after 1 push already done
# server.ts currently has NO marker, so we start by ADDING it (step 2 first)
# Then do 49 more full cycles = 98 more pushes + 1 final remove = 99 pushes
# Total with the 1 already done = 100

$filePath = "src\server.ts"
$pushCount = 1  # already 1 push done

# First: add marker back (push 2)
$content = [System.IO.File]::ReadAllText("$PWD\$filePath")
$newContent = "// cycle-marker: portfolio activity`r`n" + $content
[System.IO.File]::WriteAllText("$PWD\$filePath", $newContent, [System.Text.Encoding]::UTF8)
git add $filePath | Out-Null
git commit -m "chore: add marker (cycle 1)" | Out-Null
git push origin main | Out-Null
$pushCount++
Write-Host "Push $pushCount OK - cycle 1 add" -ForegroundColor Cyan

# Now do cycles 2-50 (49 cycles = 98 pushes), total will be 100
for ($i = 2; $i -le 50; $i++) {

    # Remove marker
    $content = [System.IO.File]::ReadAllText("$PWD\$filePath")
    $newContent = $content -replace "// cycle-marker: portfolio activity`r`n", ""
    [System.IO.File]::WriteAllText("$PWD\$filePath", $newContent, [System.Text.Encoding]::UTF8)
    git add $filePath | Out-Null
    git commit -m "chore: remove marker (cycle $i)" | Out-Null
    git push origin main | Out-Null
    $pushCount++
    Write-Host "Push $pushCount OK - cycle $i remove" -ForegroundColor Green

    # Add marker back
    $content = [System.IO.File]::ReadAllText("$PWD\$filePath")
    $newContent = "// cycle-marker: portfolio activity`r`n" + $content
    [System.IO.File]::WriteAllText("$PWD\$filePath", $newContent, [System.Text.Encoding]::UTF8)
    git add $filePath | Out-Null
    git commit -m "chore: add marker (cycle $i)" | Out-Null
    git push origin main | Out-Null
    $pushCount++
    Write-Host "Push $pushCount OK - cycle $i add" -ForegroundColor Cyan
}

Write-Host "DONE! Total pushes: $pushCount" -ForegroundColor Yellow
