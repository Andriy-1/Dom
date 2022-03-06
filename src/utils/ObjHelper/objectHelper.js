export const statusFollow = (items, itemId, newObjProps) => {
	return items.map(u => {
		if (u.id === itemId) {
			return { ...u, ...newObjProps }
		}
		return u;
	})
}