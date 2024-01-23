package x

import (
	"time"

	"github.com/patrickmn/go-cache"
	"github.com/spf13/cast"
)

var defaultCache *cache.Cache

func init() {
	defaultCache = cache.New(5*time.Minute, 10*time.Minute)
}

func Set(key any, val any) {
	defaultCache.Set(cast.ToString(key), val, cache.DefaultExpiration)
}

func Get[T any](key any) (T, bool) {
	val, found := defaultCache.Get(cast.ToString(key))
	return val.(T), found
}
