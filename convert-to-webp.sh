for img in *.jpg *.jpeg *.png; do
  [ -f "$img" ] && convert "$img" -quality 85 "${img%.*}.webp"
done
